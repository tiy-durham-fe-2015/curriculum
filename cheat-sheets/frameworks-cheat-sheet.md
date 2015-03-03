
- Routing 
	- The ability for your application to respond to a URL
	- When you see URL1, you respond in this way
	- When you see URL2, you respond in that way
	- Usually, routing allows you to easily pull arguments out of a URL

- Controllers
	- Code that is responsible for taking data and exposing it to a view
	- It also generally exposes functions to the view

- Views
	- Templates/HTML that represent data

- Models
	- Object whose responsibility is to represent data
	- Generally, models should have no (or very little) logic

- Services/stores
	- Objects whose responsibility is to query a datasource and/or update/insert, etc
	- CRUD operations for an API or for any data source
	- All API calls should be inside of a service object
	- C = Create (POST)
	- R = Read (GET)
	- U = Update (PUT)
	- D = Delete (DELETE)

- Factories
	- A key/value store, a way for you to ask for a thing by name
	- The responsibility for creating the "thing" is handled by the factory
	- If you want to change what happens when a "thing" is requested/crated, you can
	do that in one place (the factory)
	- A way to share objects/code between components in an application
	
- Singleton
- Single responsibility principle
- Directives/partials
- AJAX
- Promises
