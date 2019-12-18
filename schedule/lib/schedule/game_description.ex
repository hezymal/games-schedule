defmodule Schedule.GameDescription do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, except: [:__meta__]}
  schema "game_descriptions" do
    field :logo_url, :string
    field :platforms, :string
    field :url, :string
    field :game_id, :integer

    timestamps()
  end

  @doc false
  def changeset(game_description, attrs) do
    game_description
    |> cast(attrs, [:logo_url, :platforms, :url, :game_id])
    |> validate_required([:logo_url, :game_id])
  end
end
