# How to make use of AdmPwd.E tools from non-domain joined PC
Sometimes it may come handy to be able to use AdmPwd.E management tools (or programs integrated with AdmPwd.E, such as mRemoteNG) from non-domain joined PC. However, it's not easy to get authenticated by PDS being outside of forest. One traditional approach is to store credentials for PDS forest in Windows Credential Manager and let machine to use them whenever it needs to authenticate. However, this approach keeps another password on your machine (while still secured by Windows, but anyway...)

Better approach is to use X.509 certificate instead - many accesses are protected by certificate or Smart Card anyway. 

This article gives guidance for configuration of certificate based Kerberos authentication from non-domain joined PC. Usage of X.509 certificate does not leave password on device, and can - if the certificate is marked as non-exportable - limit access to specific machines only to those you distribute certificate to.

## Prerequisites
Domain controllers must have certificate with EKU = KDC Authentication. There is certificate template 'Kerberos Authentication' in Windows Certification Authority that is properly configured for this purpose.

User's certificate must have EKU = Client Authentication + SmartCard Logon. Certificate may be a soft-certificate or stored on smart card. Obviously, user's certificate must be suitable for SmartCard Logon, most importantly it must have Principal Name=YourUPN in SubjectAlternateName.

## Implementation
- Import necessary Root CA and Intermediate CA certificates into appropriate certificate stores for your user account on your non-domain joined machine.
  - This makes sure that certificate of Domain Controller that authenticates you is trusted by Windows
- Make sure that TLS versions used by DC and your non-domain joined machine are compatible (e.g. DC requires TLS1.2, but your machine is not configured to use it)
- Import your user certificate you got from Certification Authority to your personal certificate store
- Install AdmPwd.E management tools (including ADMX templates)
- Open Local Group Policy Editor (gpedit.msc) and locate policy Computer configuration - Administrative templates - AdmPwd Enterprise - Administrative tools - PDS to be used
- Enter DNS name of 1 or more PDS servers installed in AD forest you want to manage
  - This tells all AdmPwd.E tools location of PDS server


This is all what's needed.

## Optional configurations
### Authentication mechanism assurance (AMA)
You can configure [Authentication Mechanism Assurance (AMA)](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/dd378897(v=ws.10)) on your domain controler and PKI, so not all certificates with proper EKU are usable for authentication against PDS (remember, PDS supports AMA via *Pds – AccessControl - MandatoryGroups* configuration parameter). AMA does not prevent you to receive Kerberos token, but helps further restricts what the token can be used for.

To start with AMA, you just need:
* Create and implement appripriate Certificate Issuance Policies
* Create Universal, Security group in AD for each Issuance Policy
* Put DN of associated AD group to msDS-OIDToGroupLink of respective Issuance policy
* Create or updated certificate templates to contain appropriate Issuance policy in Issuance policies
* Issue certificates for users according updated certificate templates
* Configure Mandatory groups feature of PDS to allow only members of groups associated with approved Issuance policies

Now users will be able to retrieve/reset password only after they authenticate with the certificate - username/password authentication will not allow them password retrieval/reset.

### Multiple environments managed from single PC
Consider the following scenario:
* You are vendor who manages environment of multiple customers
* Each customer has own AD forest with instance of PDS
* You are given Managed Domain Account by each customer that yoiu use to perform management tasks in their environment
* You use AdmPwd.E tools (UI or PowerShell) to retrieve password of managed domain account
* You use certificate issued by each customer to authenticate password retrieval, potentially with AMA, as described earlier in this article

What you can do is to configure your machine to support multiple independent PDS instances - 1 or more instances per AD forest of each customer. You use [registry configuration](~/articles/Specification/Management-Tools/Configuration.md) - parameter PDSList.
Your configuration stored in PDSLIst may look as follows:
```
pds.domain.customer1.com:61184:customer1.com
pds.domain.customer2.com:61184:customer2.com
dc.customer3.com:61184:customer3.com
```
Configuration above makes sure that for each AD forest of each customer, proper PDS instance will be contacted when you need to retrieve the password, such as:
```PowerShell
Get-AdmPwdManagedAccountPassword -AccountName jiri -ForestDnsName customer2.com
```
## Caveats
Validation of certificate used by Domain Controller during authentication on non-domain joined machine may be tricky. This is because AD/LDAP storage of CRL is not available and client must use CRL published on other location that does not require authentication.
Windows CA issues certificates that specify CRL location as multiple URLs in single CDP entry, like this:
```
[1]CRL Distribution Point
     Distribution Point Name:
          Full Name:
               URL=ldap:///CN=MyCA,CN=machine,CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,DC=mydomain,DC=com?certificateRevocationList?base?objectClass=cRLDistributionPoint (ldap:///CN=MyCA,CN=machine,CN=CDP,CN=Public%20Key%20Services,CN=Services,CN=Configuration,DC=mydomain,DC=com?certificateRevocationList?base?objectClass=cRLDistributionPoint)
               URL=http://pki.maydomain.com/CRL/MyCA.crl
```
We have seen Windows machines that just try the first URL in CDP entry, fail on it (because cannot authenticate against AD yet) and never try another URL - this results in failure in authentication, saying that revocation server is offline.
If this is your case, do one of the following:
- make sure that generally available CDP (in example above the URL http://pki.mydomain.com/CRL/MyCA.crl) appears first in the list of URLs
- configure your certificationauthority to put multiple URLs as separate CDP entries into certificate

## Conclusion
Ability to be able to perform Kerberos authentication via certificate from non-domain joined machines enables additional use cases of AdmPwd.E management tools, while keeping security on high standard. No stored username and password, just certificates with private keys that can be placed to SmartCards or additionally protected by machine that the certificate is intended to be used on.  
Additional protection via Authentication Mechanism Assurance can further limit usage of certificate to ensure usage for intended purpose only.