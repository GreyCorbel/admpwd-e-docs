---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPdsDnsParameters

## SYNOPSIS
Returns parameters of PDS service related to registration of PDS autodiscovery SRV record.

## SYNTAX

### Pds
```powershell
Get-AdmPwdPdsDnsParameters [-Pds] <PdsEndpoint> [<CommonParameters>]
```

### PdsName
```powershell
Get-AdmPwdPdsDnsParameters [-PdsName] <String> [<CommonParameters>]
```

## DESCRIPTION
Returns parameters of PDS service related to registration of PDS autodiscovery SRV record that is used by management tools to autodiscover instances of PDS.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Get-AdmPwdPdsDnsParameters
```

Gets parameters of DNS SRV record registered by PDS for autodiscover process by management tools

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

### AdmPwd.Types.DnsParameters
Object representing parameters of DNS SRV record registered by PDS to allow management tools to discover instance of the PDS service

## NOTES

## RELATED LINKS
