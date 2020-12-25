---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Remove-AdmPwdPdsSupportedForest

## SYNOPSIS
Removes registration of supported AD forest for management from PDS configuration.

## SYNTAX

### Pds
```powershell
Remove-AdmPwdPdsSupportedForest [-Pds] <PdsEndpoint> [-ForestName] <String> [<CommonParameters>]
```

### PdsName
```powershell
Remove-AdmPwdPdsSupportedForest [-PdsName] <String> [-ForestName] <String> [<CommonParameters>]
```

## DESCRIPTION
PDS supports management of untrusted forests.
However, for management of untrusted forests, the following prerequisites must be configured:
- Explicit credentials for PDS to use when accessing intrusted forest
- Mapping of SID from untrusted forest to SIDs from PDS forests.

For management of untrusted AD forest, connection credentials are required.
For management of trusted AD forest, connection credentials are optional.

Configuration is stored in PDS.config file. This command removes matching entry from configuration.
## EXAMPLES

### Example 1
```powershell
# Remove supported forest on all PDS instances
Get-AdmPwdPds | Remove-AdmPwdPdsSupportedForest -ForestName 'MyRemoteForest.com'
```

Gets list of all PDS instances discovered and removes definition of supported AD forest from configuration.

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

### -ForestName
DNS name of remote AD forest.

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
Caller has to be member of PDS administrators role. If not member, Access Denied error is returned.

## RELATED LINKS
