using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations.ApplicationDb
{
    /// <inheritdoc />
    public partial class TrainersModelAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trainers",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CityOfWork = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    isRemoteAllowed = table.Column<bool>(type: "bit", nullable: false),
                    Rate = table.Column<float>(type: "real", nullable: false),
                    Bio = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Disciplines = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trainers", x => x.UserId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trainers");
        }
    }
}
