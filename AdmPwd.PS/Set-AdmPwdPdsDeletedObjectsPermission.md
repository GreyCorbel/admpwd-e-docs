---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdPdsDeletedObjectsPermission

## SYNOPSIS
Delegates necessary permissions to Password Decryptor service accounts on Deleted Objects container in specified domain

## SYNTAX

```powershell
Set-AdmPwdPdsDeletedObjectsPermission [[-DomainDnsName] <String>] [-AllowedPrincipals] <String[]> [<CommonParameters>]
```

## DESCRIPTION
This command delegates necessary permissions to service account of PDS on Deleted Objects container in the domain.  
On such container, PDS needs to have specific permissions, other than on normal container - that's the reason why separate delegation cmdlet is used.

Typically, there is multiple instances of Password Decryptor service.  
Service runs in security context of NETWORK SERVICE, so it accesses AD in security context of computer account of computer it runs on.  
Best practice is to create a group for purpose of delegation of permissions, and put computer accounts into this group.  

Specific scenario is when service is hosted on domain controller:  this case, Password Decryptor service may also access AD locally on the same DC in the security context of NETWORK SERVICE account. In this case, NETWORK SERVICE needs to be granted service permissions on AD as well.

## EXAMPLES

### Example 1
```powershell
Set-AdmPwdPdsDeletedObjectsPermission -DomainDnsName:mydomain.mycompany.com -AllowedPrincipals:MyDomain\PdsServiceAccount
```

Service acocunt MyDomain\PdsServiceAccount will be given Password Decryptor service account permission on Deleted Objects container in domain mydomain.mycompany.com.

## PARAMETERS

### -DomainDnsName
DNS domain name of domain where to delegate permissions

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedPrincipals
List of security principals to be allowed to have Password Decryption service permission on Deleted Objects container

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]
### System.String
## OUTPUTS

### AdmPwd.Types.ObjectInfo
## NOTES
Caller needs to have permission to modify ACL on respective container

## RELATED LINKS
