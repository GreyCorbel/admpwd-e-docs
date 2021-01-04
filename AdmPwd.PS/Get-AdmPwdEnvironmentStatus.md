---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdEnvironmentStatus

## SYNOPSIS
Returns status information about environment managed by the solution.

## SYNTAX
```powershell
Get-AdmPwdEnvironmentStatus [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns the following information:  
- total number of licensed machines for admin password management and current license consumption
- total number of licensed managed domain user accounts and current license consumption
- license expiration
- list of all AD domains in all supported AD forest, each domain with number of managešd computers and domain user accounts

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdEnvironmentStatus
```

Returns status information about environment managed by the solution.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS
### AdmPwd.Types.EnvironmentStatus

## NOTES
Caller does not have to be PDS administrator. Call is not audited.
## RELATED LINKS
