---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdPdsDnsParameters

## SYNOPSIS
Sets parameters of PDS service related to registration of PDS autodiscovery SRV record.

## SYNTAX

### Pds
```powershell
Set-AdmPwdPdsDnsParameters [-Pds] <PdsEndpoint> [[-Priority] <Byte>] [[-RegistrationInterval] <Int32>] [[-Ttl] <UInt16>] [[-Weight] <Byte>] [[-UnregisterOnShutdown] <Boolean>] [<CommonParameters>]
```

### PdsName
```powershell
Set-AdmPwdPdsDnsParameters [-PdsName] <String> [[-Priority] <Byte>] [[-RegistrationInterval] <Int32>] [[-Ttl] <UInt16>] [[-Weight] <Byte>] [[-UnregisterOnShutdown] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Sets parameters of PDS service related to registration of PDS autodiscovery SRV record that is used by management tools to autodiscover instances of PDS.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Set-AdmPwdPdsDnsParameters -RegistrationInterval 172800
```

Instructs PDS to repeat registration of SRV record every 2 days to prevent DNS record expiration

### Example 2
```powershell
Get-AdmPwdPds | Set-AdmPwdPdsDnsParameters -RegistrationInterval 0
```

Instructs PDS to not register DNS SRV record for autodiscovery (typically used when DNS zone does not support dynamic update)

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

### -Priority
Priority of DNS SRV record

```yaml
Type: Byte
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrationInterval
How often (in seconds) PDS repeats registration of SRV record to protect it from expiration

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ttl
TTL of DNS SRV record

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Weight
Weight of DNS SRV record

```yaml
Type: Byte
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnregisterOnShutdown
Whether or not PDS shall unregister DNS SRV record when shutting down, to prevent being discovered by clients when not running.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### AdmPwd.Types.PdsEndpoint
### System.String
### System.UInt16
### System.UInt32
### System.Byte
### System.Boolean
## OUTPUTS

## NOTES

## RELATED LINKS
