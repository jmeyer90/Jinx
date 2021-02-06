class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.float :longitude
      t.float :latitude

      t.timestamps
    end

    add_index :businesses, :name, unique: true
    add_index :businesses, :address, unique: true
  end

  def down
    drop_table :businesses
  end
end
