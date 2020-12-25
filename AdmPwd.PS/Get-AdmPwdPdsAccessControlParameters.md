---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPdsAccessControlParameters

## SYNOPSIS
Returns parameters of PDS service related to access check process.

## SYNTAX

### Pds
```powershell
Get-AdmPwdPdsAccessControlParameters [-Pds] <PdsEndpoint> [<CommonParameters>]
```

### PdsName
```powershell
Get-AdmPwdPdsAccessControlParameters [-PdsName] <String> [<CommonParameters>]
```

## DESCRIPTION
PDS supports the following switches that influence access control decisions:
-  HonorFullControl: allows password reads/resets also to principals who have Full Control permission on object
- HonorAllExtendedRights: allows password reads/resets also to principals who have All Extended Rights permission on object
- HonorLocalGroupsFromRemoteComputerDomain: In multi-domain AD forests, PDS reads local group membership of caller in domain to see if local group gives Read or Reset password permision, and honors such permissions.

Flags are stored in PDS.config file and are retrieved by this command.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Get-AdmPwdPdsAccessControlParameters
```

Gets parameters of PDS access control process.

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

### AdmPwd.Types.AccessControlParameters
Object representing parameters of PDS access control process.

## NOTES

## RELATED LINKS
