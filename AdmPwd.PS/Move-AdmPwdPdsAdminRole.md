---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Move-AdmPwdPdsAdminRole

## SYNOPSIS
Sets an AD group as PDS Admins role group.

## SYNTAX

### Pds
```powershell
Move-AdmPwdPdsAdminRole [-Pds] <PdsEndpoint> [-NewRoleHolder] <String> [<CommonParameters>]
```

### PdsName
```powershell
Move-AdmPwdPdsAdminRole [-PdsName] <String> [-NewRoleHolder] <String> [<CommonParameters>]
```

## DESCRIPTION
Sets a group as PDS Admins role group. Members of group will have permission to manage configuration of PDS. Previous holder of the role will no longer have permisison to manage PDS - there can be only one holder of the role.

## EXAMPLES

### Example 1
```powershell
Move-AdmPwdPdsAdminRole -NewRoleHolder 'MyDomain\PDSAdminsGroup'
```

Sets AD group Mydomain\PDSAdminsGroup as role group for PDS Admin role.

## PARAMETERS

### -Pds
Instance of PDS as returned by Get-AdmPwdPds command

```yaml
Type: PdsEndpoint
Parameter Sets: Pds
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PdsName
Name of instance of PDS  - DNS name of machine hosting PDS service

```yaml
Type: String
Parameter Sets: PdsName
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NewRoleHolder
Name of the AD group that implementes PDS Admin role.  
Members of the group have permission to manage configuration of PDS service.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### AdmPwd.Types.PdsEndpoint
### System.String
## OUTPUTS

## NOTES

## RELATED LINKS
