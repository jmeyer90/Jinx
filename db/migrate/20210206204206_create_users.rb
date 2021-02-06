class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.integer :zip_code, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :zip_code
  end

  def down
    drop_table :users
  end
end
