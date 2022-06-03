"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Type_Users",
            [
                {
                    type: "Superadmin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    type: "Admin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    type: "Member",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("People", null, {});
    },
};
