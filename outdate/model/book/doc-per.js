import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Model, Sequelize } from 'sequelize';
import sequelize from '../../lib/db';
class DocumentPermission extends Model {
    toJSON() {
        return {
            id: this.id,
            book: this.book,
            owner: this.owner,
            isChapter: this.isChapter,
            permission: this.permission,
            preview: this.permission
        };
    }
}
DocumentPermission.init({
    id: {
        type: Sequelize.INTEGER(13),
        primaryKey: true,
        autoIncrement: true
    },
    book: {
        type: Sequelize.INTEGER(13),
        allowNull: false,
        comment: '所属的图书'
    },
    owner: {
        type: Sequelize.INTEGER(13),
        allowNull: false,
        comment: '所属的章节或文档'
    },
    isChapter: {
        type: Sequelize.INTEGER(13),
        allowNull: false,
        comment: '是否当前的权限为章节'
    },
    permission: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        comment: '对象权限(PUBLIC:0, PRIVATE:1) | 受到全局book的影响'
    },
    preview: {
        type: Sequelize.INTEGER(13),
        defaultValue: 0,
        comment: '如果不是公开则可预览前多少个字符 | 当为 Chapter 时此项表示可以预览的前X个文档(经过排序后)'
    }
}, merge({
    sequelize,
    tableName: 'doc_per',
    modelName: 'doc_per'
}, InfoCrudMixin.options));
export { DocumentPermission };
