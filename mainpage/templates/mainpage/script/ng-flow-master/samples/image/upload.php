ortedOn ref="windows:SUPPORTED_Windows8" />
            <elements>
                <decimal id="Reporting_WppTracingComponents" valueName="WppTracingComponents" minValue="0" maxValue="4294967295" />
            </elements>
        </policy>
        <policy name="Reporting_WppTracingLevel" class="Machine" displayName="$(string.Reporting_WppTracingLevel)" explainText="$(string.Reporting_WppTracingLevel_Explain)" key="Software\Policies\Microsoft\Windows Defender\Reporting" valueName="WppTracingLevel" presentation="$(presentation.Reporting_WppTracingLevel)">
            <parentCategory ref="Reporting" />
            <supportedOn ref="windows:SUPPORTED_Windows8" />
            <elements>
                <decimal id="Reporting_WppTracingLevel" valueName="WppTracingLevel" minValue="0" maxValue="4294967295" />
            </elements>
        </policy>
        <policy name="Scan_AllowPause" class="Machine" displayName="$(string.Scan_AllowPause)" explainText="$(string.Scan_AllowPause_Explain)" key="Software\Policies