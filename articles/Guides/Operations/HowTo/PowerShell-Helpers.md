# PowerShell scripts and helpers
This article shows various PowerShell one-liners, scripts and helpers that can help you operate the solution.

Commands often use Powershell module S.DS.P for searching AD. Module can be found on [GitHub](https://github.com/jformacek/S.DS.P) or installed directly from [PowerShell Gallery](https://www.powershellgallery.com/packages/S.DS.P) via command <code>Install-Module S.DS.P</code>

## List computers that report password to AD
This script lists all computer accounts in domain that are managed by solution
```powershell
#import PowerShell module
Import-Module S.DS.P -RequiredVersion 2.0.6
#register attribute value convertor for password expiration timestamp
Register-LdapAttributeTransform -Name filetime
#establish LDAP connection to a domain controller from your domain
$conn=Get-LdapConnection
#get domain controller parameters
$rootDSE=Get-RootDSE -LdapConnection $conn
#load computer objects that have password expiration populated; convert password expiration to datetime and sort ascending by password expiration
Find-LdapObject -LdapConnection $conn -searchFilter '(&(objectClass=computer)(ms-Mcs-AdmPwdExpirationTime=*))' -searchBase $rootDSE.defaultNamingContext -PropertiesToLoad 'cn','ms-Mcs-AdmPwdExpirationTime' | select cn,ms-Mcs-AdmPwdExpirationTime | sort ms-Mcs-AdmPwdExpirationTime
```

## Get password update events from client activity log
This command looks for password update events in centralized client activity log.
```powershell
#filter event log to list password update events, and report computername and timestamp when event was logged
$data=Get-WinEvent -LogName 'GreyCorbel-AdmPwd.E-ClientActivity/Operational' -FilterXPath "*[EventData[Data='Admin password updated']]" | select -property @{N='Computer';E={$_.Properties[0].Value}}, @{N='Timestamp';E={$_.TimeCreated}}
```

