---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPdsAdminRole

## SYNOPSIS
Returns name of group that has role of PDS Administrator

## SYNTAX

### Pds
```powershell
Get-AdmPwdPdsAdminRole [-Pds] <PdsEndpoint> [<CommonParameters>]
```

### PdsName
```powershell
Get-AdmPwdPdsAdminRole [-PdsName] <String> [<CommonParameters>]
```

## DESCRIPTION
PDS administrator is configured in PDS.config file.
This role is allowed to manage configuration of PDS service.  
Default holder of this role is Enterprise Admins group

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Get-AdmPwdPdsAdminRole
```

Returns name of group that is PDS Admin role holder

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### AdmPwd.Types.PdsEndpoint
### System.String
## OUTPUTS
### AdmPwd.Types.Role

## NOTES

## RELATED LINKS
