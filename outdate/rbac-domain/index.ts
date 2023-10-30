// Initialize a Sequelize adapter and use it in a Node-Casbin enforcer:
// The adapter can not automatically create database.
// But the adapter will automatically and use the table named "casbin_rule".
// ORM should not create databases automatically.
import casbin from 'casbin'
import { SequelizeAdapter } from 'casbin-sequelize-adapter'
import { IEndsSetting } from '../../types/setting-config.js'
import Model from './model.js'
import setting from './../../config/setting.js'

export async function createRbacCasbin(setting: IEndsSetting) {

    const a = await SequelizeAdapter.newAdapter({
        username: setting.database.casbin.username,
        password: setting.database.casbin.password,
        database: setting.database.casbin.database,
        dialect: 'mysql',
    });

// Check the permission.
//     await e.enforce('alice', 'data1', 'read');

// Modify the policy.
// await e.addPolicy(...);
// await e.removePolicy(...);

// Save the policy back to DB.
//     await e.savePolicy();

    return global.eller = await casbin.newEnforcer(casbin.newModel(Model), a)
}

export default () => {
    // Promise.resolve(createRbacCasbin(setting))
}
