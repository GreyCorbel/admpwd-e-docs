---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Add-AdmPwdPdsSupportedForest

## SYNOPSIS
Adds registration of supported AD forest for management to PDS configuration (optionally with connection credentials for the forest).

## SYNTAX

### Pds
```powershell
Add-AdmPwdPdsSupportedForest [-Pds] <PdsEndpoint> [-ForestName] <String> [[-Credential] <PSCredential>] [[-KeyId] <UInt32>] [-OverrideForestName] [<CommonParameters>]
```

### PdsName
```powershell
Add-AdmPwdPdsSupportedForest [-PdsName] <String> [-ForestName] <String> [[-Credential] <PSCredential>] [[-KeyId] <UInt32>] [-OverrideForestName] [<CommonParameters>]
```

## DESCRIPTION
PDS supports management of untrusted forests.
However, for management of untrusted forests, the following prerequisites must be configured:

- Explicit credentials for PDS to use when accessing intrusted forest
- Mapping of SID from untrusted forest to SIDs from PDS forests.

For management of untrusted AD forest, connection credentials are required.

For management of trusted AD forest, connection credentials are optional.

## EXAMPLES

### Example 1
```powershell
# Collect connection credentials
$creds = Get-Credential
# Configure supported forest on all PDS instances
Get-AdmPwdPds | Add-AdmPwdPdsSupportedForest -ForestName 'MyRemoteForest.com' $Credential $creds
```

Gets list of all PDS instances discovered and adds definition of supported AD forest with explicit credentials.
Credentials are encrypted in PDS configuration file by most recent PDS enryption key.

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

### -Credential
Credential to use when PDS connects to AD forest being added.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyId
ID of key that will be used to protect connection credentials in PDS configuration file.

Default: null (which means that PDS will automatically use latest encryption key)

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideForestName
Do not specify unless you know what you're doing or product support asks you to do so

```yaml
Type: SwitchParameter
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
### System.Management.Automation.PSCredential
### System.String
### System.UInt32

## OUTPUTS
### AdmPwd.Types.SupportedForest

## NOTES
Caller has to be member of PDS administrators role. If not a member, Access Denied error is returned.

## RELATED LINKS
