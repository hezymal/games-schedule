defmodule Schedule.Repo.Migrations.CreateGames do
  use Ecto.Migration

  def up do
    create table "games" do
      add :year, :integer
      add :month, :integer
      add :day, :integer
      add :name, :string

      timestamps()
    end

    create table "game_descriptions" do
      add :logo_url, :string
      add :platforms, :string
      add :url, :string
      add :game_id, :integer

      timestamps()
    end
  end

  def down do
    drop table "games"
    drop table "game_descriptions"
  end
end
