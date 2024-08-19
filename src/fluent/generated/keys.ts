import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'cc8af0f2720142f79d320547a7539fc2'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '85b0445b6aaf43aa84dd00b6fed4afa1'
                    }
                }
            }
        }
    }
}
