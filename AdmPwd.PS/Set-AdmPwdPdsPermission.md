---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdPdsPermission

## SYNOPSIS
Delegates necessary permissions to Password Decryptor service accounts to be able to interact with AD when reading or resetting passwords of managed local admin accounts.

## SYNTAX

```powershell
Set-AdmPwdPdsPermission [-Identity] <String> [-AllowedPrincipals] <String[]> [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Typically, there is multiple instances of Password Decryptor service.  
Service runs in security context of NETWORK SERVICE, so it accesses AD in security context of computer account of computer it runs on.  
Best practice is to create a group for purpose of delegation of permissions, and put computer accounts into this group.  
Specific scenario is when service is hosted on domain controller:  this case, Password Decryptor service may also access AD locally on the same DC in the security context of NETWORK SERVICE account.  
In this case, NETWORK SERVICE needs to be granted service permissions on AD as well.

## EXAMPLES

### Example 1
```powershell
Set-AdmPwdPdsPermission -Identity:MyComputers -AllowedPrincipals:MyDomain\PdsServiceHosts
```

Members of group MyDomain\PdsServiceHosts will be given Password Decryptor service account permission on computers in container MyComputers.

## PARAMETERS

### -Identity
Identification of container where to set the permission.
Permissions are then inherited to computers within this container and subcontainers.  
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
List of security principals to be allowed to have Password Decryption service permission on computers under given container

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
DNS Name of AD forest where to find.
If not specified, current forest is used.

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
Caller needs to have permission to modify ACL on respective container.

## RELATED LINKS
