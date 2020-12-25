---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Remove-AdmPwdPdsSidMapping

## SYNOPSIS
Removes mapping of SIDs from untrusted forest to SID from PDS forest.

## SYNTAX

### Pds
```powershell
Remove-AdmPwdPdsSidMapping [-Pds] <PdsEndpoint> [-PrimarySid] <SecurityIdentifier> [<CommonParameters>]
```

### PdsName
```powershell
Remove-AdmPwdPdsSidMapping [-PdsName] <String> [-PrimarySid] <SecurityIdentifier> [<CommonParameters>]
```

## DESCRIPTION
PDS supports management of untrusted forests.
However, for management of untrusted forests, the following prerequisites must be configured:

- Explicit credentials for PDS to use when accessing intrusted forest
- Mapping of SID from untrusted forest to SIDs from PDS forests.

SID mappings are used for access control - User who wants to read or reset password must have his/her own SID (own SID or SID of group he/she is member of) 'paired' with SID that has been delegated the permission for password read/reset in untrusted forest.  
SID mapping is used to establish this pairing of SIDs.

Configuration is stored in PDS.config file. This command removes matching entry from configuration.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Remove-AdmPwdPdsSidMapping -PrimarySid $primarySid
```

Gets list of all PDS instances discovered and removes definition SID mapping.

Note: Mapping is identified by PrimarySid

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

### -PrimarySid
Sid from untrusted forest.  
This is SID of principal that is delegated permission to read/reset password in untrusted forest.

```yaml
Type: SecurityIdentifier
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
### System.Security.Principal.SecurityIdentifier
### System.String
## OUTPUTS

## NOTES
Caller has to be member of PDS administrators role. If not member, Access Denied error is returned.

## RELATED LINKS
