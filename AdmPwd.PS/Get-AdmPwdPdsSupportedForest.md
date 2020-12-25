---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPdsSupportedForest

## SYNOPSIS
Lists supported AD forests from PDS configuration.

## SYNTAX

### Pds
```powershell
Get-AdmPwdPdsSupportedForest [-Pds] <PdsEndpoint> [<CommonParameters>]
```

### PdsName
```powershell
Get-AdmPwdPdsSupportedForest [-PdsName] <String> [<CommonParameters>]
```

## DESCRIPTION
PDS supports management of trusted and untrusted forests.
However, for management of untrusted forests, the following prerequisites must be configured:
- Explicit credentials for PDS to use when accessing intrusted forest
- Mapping of SID from untrusted forest to SIDs from PDS forests.

For management of untrusted AD forest, connection credentials are required.  
For management of trusted AD forest, connection credentials are optional.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Get-AdmPwdPdsSupportedForest
```

Gets list of all PDS instances discovered and for each of them gets all definitions of supported AD forests.

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

### AdmPwd.Types.SupportedForest
Object representing supported forest and its configured parameters

## NOTES
Caller has to be member of PDS administrators role. If not member, Access Denied error is returned.

## RELATED LINKS
