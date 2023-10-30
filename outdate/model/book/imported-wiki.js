import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Model, Sequelize } from 'sequelize';
import sequelize from '../../lib/db';
import { Wiki } from './wiki';
class ImportedWiki extends Model {
    toJSON() {
        return {
            id: this.id,
            wikiId: this.wikiId,
            platform: this.platform,
            url: this.url,
            content: this.content,
            details: this.details,
            events: this.events,
            create_time: this.getDataValue('create_time'),
            update_time: this.getDataValue('update_time')
        };
    }
}
ImportedWiki.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    wikiId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '对应的维基序号'
    },
    platform: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '平台ID'
    },
    url: {
        type: Sequelize.STRING(256),
        allowNull: false,
        comment: '导入的地址'
    },
    content: {
        type: Sequelize.STRING(256),
        allowNull: false,
        comment: 'Header type'
    },
    details: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '远程内容类型 0:json 1:x-www-form-urlencoder'
    },
    events: {
        type: Sequelize.STRING(256),
        allowNull: true,
        comment: 'receiver events'
    }
}, merge({
    sequelize,
    tableName: 'imported_wiki',
    modelName: 'imported_wiki'
}, InfoCrudMixin.options));
Wiki.Imports = Wiki.hasOne(ImportedWiki, {
    foreignKey: 'wikiId',
    sourceKey: 'id',
    as: 'imports'
});
export { ImportedWiki };
