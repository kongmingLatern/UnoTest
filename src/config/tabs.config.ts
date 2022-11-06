export interface UserConfig {
  /**
   * @description: 选项卡配置
   * @type {tabConfig}
   */
  tab?: Record<ValueConfig & string, any>[]
}

export interface ValueConfig {
  /**
   * @description: 选项卡配置
   * @type {tabConfig}
   */
  tabsOptions?: 'title' | 'name'
}

type UserExportConfig = UserConfig

declare function backConfig(config: UserExportConfig): UserExportConfig;


console.log(backConfig({
  tab: [{
    title: '用户管理',
    name: 'user',
  }, {
    title: '角色管理',
    name: 'role',
  }]
}));

