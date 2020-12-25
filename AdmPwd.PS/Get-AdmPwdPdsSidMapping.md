---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPdsSidMapping

## SYNOPSIS
Gets mapping of SIDs from untrusted forest to SID from PDS forest from PDS instance.

## SYNTAX

### Pds
```powershell
Get-AdmPwdPdsSidMapping [-Pds] <PdsEndpoint> [<CommonParameters>]
```

### PdsName
```powershell
Get-AdmPwdPdsSidMapping [-PdsName] <String> [<CommonParameters>]
```

## DESCRIPTION
PDS supports management of untrusted forests.
However, for management of untrusted forests, the following prerequisites must be configured:
- Explicit credentials for PDS to use when accessing intrusted forest
- Mapping of SID from untrusted forest to SIDs from PDS forests.

SID mappings are used for access control - User who wants to read or reset password must have his/her own SID (own SID or SID of group he/she is member of) 'paired' with SID that has been delegated the permission for password read/reset in untrusted forest.  
SID mapping is used to establish this pairing of SIDs.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Get-AdmPwdPdsSidMapping
```

Gets list of all PDS instances discovered and for each of them lists all defined SID mappings.

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

### AdmPwd.Types.SidMapping[]
Object representing SID mapping defined in PDS configuration

## NOTES
Caller has to be member of PDS administrators role. If not member, Access Denied error is returned.

## RELATED LINKS
