# PowerShell script to refactor all instrument data files to use the factory function
# This script converts the repetitive object structure to use createInstrumentWithImport

param(
    [string]$InstrumentsPath = "src\data\instruments"
)

$ErrorActionPreference = "Stop"

# List of files to process
$filesToProcess = @(
    "rki_gx_3r.ts",
    "rki_gx_3r_pro.ts", 
    "rki_gx_6000.ts",
    "rki_gx_9000.ts",
    "rki_gx_force.ts",
    "rki_rx_8000.ts",
    "gmi_ps_500.ts",
    "gmi_ship_surveyor.ts",
    "gmi_ps_200_calibration_station.ts",
    "gmi_ps_500_calibration_station.ts",
    "rki_sdm_04_calibration_station.ts",
    "rki_sdm_2012_calibration_station.ts",
    "rki_sdm_3r_calibration_station.ts",
    "rki_sdm_6000_calibration_station.ts",
    "rki_sdm_force_calibration_station.ts"
)

Write-Host "🔧 Starting instrument data refactoring..." -ForegroundColor Cyan
Write-Host "📁 Processing files in: $InstrumentsPath" -ForegroundColor Gray

foreach ($fileName in $filesToProcess) {
    $filePath = Join-Path $InstrumentsPath $fileName
    
    if (Test-Path $filePath) {
        Write-Host "⚡ Processing: $fileName" -ForegroundColor Yellow
        
        try {
            # Read the current file content
            $content = Get-Content $filePath -Raw
              # Extract the export variable name (e.g., "rki_gx_3r" from "export const rki_gx_3r")
            if ($content -match 'export const (\w+) = \{') {
                $exportName = $Matches[1]
                Write-Host "   📋 Found export: $exportName" -ForegroundColor Green
                
                # Extract title
                if ($content -match 'const title = "([^"]+)"') {
                    $title = $Matches[1]
                    Write-Host "   🏷️  Title: $title" -ForegroundColor Green
                } else {
                    Write-Host "   ❌ Could not extract title from $fileName" -ForegroundColor Red
                    continue
                }
                
                # Create the new file content with factory function
                $newContent = @"
import path from "@/assets/gas_detection_instruments/$($exportName).png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const $exportName = createInstrumentWithImport(
  "$title",
  [
    // TODO: Extract features array from original file
  ],
  [
    // TODO: Extract overview array from original file  
  ],
  path
);
"@
                
                # Create backup
                $backupPath = "$filePath.backup"
                Copy-Item $filePath $backupPath
                
                # Write the template (manual completion needed)
                Set-Content $filePath $newContent
                
                Write-Host "   ✅ Created template for $fileName (backup saved)" -ForegroundColor Green
                Write-Host "   ⚠️  Manual completion required: Extract features and overview arrays" -ForegroundColor Magenta
            } else {
                Write-Host "   ❌ Could not match export pattern in $fileName" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "   ❌ Error processing $fileName`: $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "   ⚠️  File not found: $fileName" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "🎯 Refactoring Summary:" -ForegroundColor Cyan
Write-Host "   • Created templates for instrument files" -ForegroundColor Gray
Write-Host "   • Backups saved with .backup extension" -ForegroundColor Gray
Write-Host "   • Manual completion required for features and overview arrays" -ForegroundColor Gray
Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Yellow
Write-Host "   1. Review each generated file" -ForegroundColor Gray
Write-Host "   2. Copy features and overview arrays from .backup files" -ForegroundColor Gray
Write-Host "   3. Test the application to ensure imports work correctly" -ForegroundColor Gray
Write-Host "   4. Delete .backup files once satisfied" -ForegroundColor Gray
