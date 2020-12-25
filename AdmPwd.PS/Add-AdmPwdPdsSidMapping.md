---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Add-AdmPwdPdsSidMapping

## SYNOPSIS
Adds mapping of SIDs from untrusted forest to SID from PDS forest.

## SYNTAX

### Pds
```powershell
Add-AdmPwdPdsSidMapping [-Pds] <PdsEndpoint> [-PrimarySid] <SecurityIdentifier>
 [-MappedSid] <SecurityIdentifier> [[-Description] <String>] [<CommonParameters>]
```

### PdsName
```powershell
Add-AdmPwdPdsSidMapping [-PdsName] <String> [-PrimarySid] <SecurityIdentifier>
 [-MappedSid] <SecurityIdentifier> [[-Description] <String>] [<CommonParameters>]
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
# bring Primary SID from untrusted forest
$primarySid=New-Object System.Security.Principal.SecurityIdentifier('S-1-5-21-418581132-3576222476-795453013-1653')
# Construct mapped SID from PDS forest
$mappedUser=New-Object System.Security.Principal.NTAccount('MyDomain\MyUser')
$mappedSid=$mappedUser.Translate([System.Security.Principal.SecurityIdentifier])
# Configure mapping on all PDS instances
Get-AdmPwdPds | Add-AdmPwdPdsSidMapping -PrimarySid $primarySid -MappedSid $mappedSid -Description 'Mapped SID from untrusted managed forest'
```

Gets list of all PDS instances discovered and adds definition SID mapping.

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

### -MappedSid
Sid of principal from PDS forest that is paired to primary SID when PDS performs access checks.
Requestor of password read/reset operation must have this SID in his security token so as it's mapped to Primary SID.

```yaml
Type: SecurityIdentifier
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Description of SID mapping being added.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
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
Caller has to be member of PDS administrators role. If not a member, Access Denied error is returned.

## RELATED LINKS
