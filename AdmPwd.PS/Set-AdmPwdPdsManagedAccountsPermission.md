---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdPdsManagedAccountsPermission

## SYNOPSIS
Delegates necessary permissions to Password Decryptor Service (PDS) service accounts, so as it is able to manage and retrieve password of managed domain user accounts.

## SYNTAX

```powershell
Set-AdmPwdPdsManagedAccountsPermission [-Identity] <String> [-AllowedPrincipals] <String[]> [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Typically, there is multiple instances of Password Decryptor service to avoid Single Point of Failure.  
Service runs in security context of NETWORK SERVICE, so it accesses AD in security context of computer account of computer it runs on.
Best practice is to create a group for purpose of delegation of permissions, and put computer accounts into this group.  
Special case is when PDS service is hosted on domain controller:  this case, PDS may also access AD locally on the same DC in the security context of NETWORK SERVICE account.  
In this case, NETWORK SERVICE needs to be granted service permissions on AD as well.

## EXAMPLES

### Example 1
```powershell
Set-AdmPwdPdsManagedAccountsPermission -Identity:MyManagedUserAccounts -AllowedPrincipals:MyDomain\PdsServiceHosts
```

Members of group MyDomain\PdsServiceHosts will be given PDS permission on user accounts in container MyManagedUserAccounts.

## PARAMETERS

### -Identity
Identification of container where to set the permission.  
Permissions are then inherited to user accounts within this container and subcontainers.  
Identity can be either name or distinguishedName of the container

```yaml
Type: String
Parameter Sets: (All)
Aliases: OrgUnit

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllowedPrincipals
List of security principals to be allowed to have PDS service permission on user accounts under given container.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForestDnsName
DNS Name of AD forest where to find. If not specified, current forest is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
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
