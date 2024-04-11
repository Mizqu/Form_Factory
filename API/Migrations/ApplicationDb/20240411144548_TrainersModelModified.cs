using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations.ApplicationDb
{
    /// <inheritdoc />
    public partial class TrainersModelModified : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Disciplines",
                table: "Trainers",
                newName: "DisciplinesIds");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DisciplinesIds",
                table: "Trainers",
                newName: "Disciplines");
        }
    }
}
