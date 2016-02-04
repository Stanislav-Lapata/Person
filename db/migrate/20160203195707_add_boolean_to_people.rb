class AddBooleanToPeople < ActiveRecord::Migration
  def change
    add_column :people, :true, :boolean
    add_column :people, :false, :boolean
  end
end
