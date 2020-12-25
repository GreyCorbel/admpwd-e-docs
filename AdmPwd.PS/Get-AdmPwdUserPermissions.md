---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdUserPermissions

## SYNOPSIS
Finds permissions that specified user has on specified AD object (computer or user account).

## SYNTAX

```powershell
Get-AdmPwdUserPermissions [-ObjectName] <String> [-UserUPN] <String> [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Finds permissions that specified user has on specified computer or user account.

Cmdlet uses the same logic that uses PDS for authorization decisions for password reading, so it may be useful when investigating why user has / does not have permission top read the password.  
Cmdlet returns permission entries that influence ability to read password, in order used by PDS when evaluating user's permissions - this means that first permission in the list is an effective permission.  

[Kerberos S4U2S](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-sfu/02636893-7a1f-4357-af9a-b672e3e3de13) logon is used to retrieve identification token of user, along with security groups user is member of.  
Groups in token, and identity of user are used to find matching entries in ACL on AD object.  
Matching entries are then ordered (deny entries first and entries for identity of user first) and returned in resulting order.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdUserPermissions -ObjectName:MyComputer -UserUPN:myUser@mydomain.com
```

Gets effective permissions as seen by PDS for myUser on MyComputer in local forest of PDS

## PARAMETERS

### -ObjectName
Name of the computer or user account to get effective permissions for

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -UserUPN
userPrincipalName of user to get effective permissions for

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForestDnsName
DNS Name of AD forest where to find. If not specified, forest where PDS is installed is used.

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
### System.String
## OUTPUTS

### AdmPwd.Types.PermissionEntry
## NOTES
Caller does not have specific permissions delegated.  
Call is not audited.  
UserUPN parameter only accepts user identity as UPN. Other formats (such as domain\user) are not accepted.

## RELATED LINKS
