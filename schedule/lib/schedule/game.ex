defmodule Schedule.Game do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, except: [:__meta__]}
  schema "games" do
    field :year, :integer
    field :month, :integer
    field :day, :integer
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(game, attrs) do
    game
    |> cast(attrs, [:year, :month, :day, :name])
    |> validate_required([:year, :month, :name])
  end
end
