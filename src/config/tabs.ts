import type { UserConfig } from "@/type"

type UserExportConfig = UserConfig

export function backConfig(config: UserExportConfig): UserExportConfig {
  return {
    tabs: config.tabs,
  }
}
