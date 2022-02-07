package basicbackend

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Opens the database with default config. Returns error if it failed.
func OpenDatabase() (*gorm.DB, error) {
	db, err := gorm.Open(sqlite.Open("database.db"), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	return db, nil
}

// Closes the given database. Returns error if it failed.
func CloseDatabase(db *gorm.DB) error {
	sqlDB, err := db.DB()
	if err != nil {
		return err
	}

	err = sqlDB.Close()
	if err != nil {
		return err
	}

	return nil
}
