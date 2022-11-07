export interface UserConfig {
  /**
   * @description: 选项卡配置
   * @type {tabConfig}
   */
  tabs?: Record<ValueConfig & string, string>[]
}

export interface ValueConfig {
  /**
   * @description: 选项卡配置
   * @type {tabConfig}
   */
  tabsOptions?: 'title' | 'name'
}

type UserExportConfig = UserConfig


export function backConfig(config: UserExportConfig) {
  return {
    tabs: config.tabs,
  }
}