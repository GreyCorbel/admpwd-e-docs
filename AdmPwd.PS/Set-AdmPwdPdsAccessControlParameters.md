---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdPdsAccessControlParameters

## SYNOPSIS
Sets parameters of PDS service related to access control decisions for password reads and resets.

## SYNTAX

### Pds
```powershell
Set-AdmPwdPdsAccessControlParameters [-Pds] <PdsEndpoint> [[-HonorAllExtendedRights] <Boolean>] [[-HonorFullControl] <Boolean>] [[-HonorLocalGroupsFromRemoteComputerDomain] <Boolean>] [[-MandatoryGroups] <SecurityIdentifier[]>] [<CommonParameters>]
```

### PdsName
```powershell
Set-AdmPwdPdsAccessControlParameters [-PdsName] <String> [[-HonorAllExtendedRights] <Boolean>] [[-HonorFullControl] <Boolean>] [[-HonorLocalGroupsFromRemoteComputerDomain] <Boolean>] [[-MandatoryGroups] <SecurityIdentifier[]>] [<CommonParameters>]
```

## DESCRIPTION
PDS supports the following switches that influence access control decisions:
-  HonorFullControl: allows password reads/resets also to principals who have Full Control permission on object
- HonorAllExtendedRights: allows password reads/resets also to principals who have All Extended Rights permission on object
- HonorLocalGroupsFromRemoteComputerDomain: In multi-domain AD forests, PDS reads local group membership of caller in domain to see if local group gives Read or Reset password permision, and honors such permissions.

Flags are stored in PDS.config file and are managed by this command.

This command also allows to specify mandatory group the caller of Read/Reset password operation has to be member of (in addition to being delegated Read/Reset password permission) so as PDS would honor the request. This allows for implementation of Just-In-Time or Authentication-Mechanism-Assurance techniques.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Set-AdmPwdPdsAccessControlParameters -HonorFullControl $true
```

Instructs PDS to allow password reads and resets when caller has Full Control on object, regardless Read Password and Reset Password permissions

### Example 2
```powershell
Set-AdmPwdPdsAccessControlParameters -PdsName mypds.mydomain.com -HonorFullControl $false -HonorAllExtendedRights $false -MandatoryGroups @('S-1-5-21-3636654476-1539571741-3331717474-3115')
```

Instructs PDS running on server mypds.mydomain.com to allow password reads and resets when caller has Read Password permission and in addition is member of the AD group with SID = S-1-5-21-3636654476-1539571741-3331717474-3115

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

### -HonorAllExtendedRights
Whether to understand 'All Extended Rights' AD permission as permission to Read and Reset the password.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HonorFullControl
Whether to understand 'Full Control' permission as permission to Read and Reset the password.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HonorLocalGroupsFromRemoteComputerDomain
Whether to perform extended discovery of domain local groups caller is member of when performing access check

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MandatoryGroups
List of additional groups user must be member of to successfully read or reset the password.  
Particularly usable for scenarios such as JIT or AMA.

```yaml
Type: SecurityIdentifier[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### AdmPwd.Types.PdsEndpoint
### System.String
### System.Boolean
### System.Security.Principal.SecurityIdentifier
## OUTPUTS

## NOTES
Caller must hold PDS Admin role for the call to succeed.

## RELATED LINKS
