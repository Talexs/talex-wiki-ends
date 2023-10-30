import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Model, Sequelize } from 'sequelize';
import sequelize from '../../lib/db';
// TODO ORGANIZE
class Organize extends Model {
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            summary: this.summary,
            image: this.image,
            permission: this.permission,
            create_time: this.getDataValue('create_time'),
            update_time: this.getDataValue('update_time')
        };
    }
}
Organize.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    summary: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    image: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    permission: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0,
        comment: '文档权限(PRIVATE:0, PUBLIC:1)'
    }
}, merge({
    sequelize,
    tableName: 'book',
    modelName: 'book'
}, InfoCrudMixin.options));
export { Organize };
