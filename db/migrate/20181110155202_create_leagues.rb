class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.float :price

      t.timestamps
    end
  end
end
