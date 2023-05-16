# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
- *Ticket 1*: Add custom id field to the Agent table
**Description**: Add a new field to the Agent table in the database to store the custom id assigned by each Facility.

**Acceptance criteria**: 
- A new column named custom_id is added to the Agent table in the database
- The column can store alphanumeric values with a maximum length of 40 characters
- The column is nullable since not all facilities may want to assign custom ids

**Effort estimate**: This task should take around 4-6 hours to complete, including database schema changes and not including any necessary data migrations (it will depends the size of the database).

- *Ticket 2*: Modify `getShiftsByFacility` function to include custom ids
**Description**: Modify the `getShiftsByFacility` function to include the custom id of each Agent in the metadata returned for each Shift.

**Acceptance criteria**: The `getShiftsByFacility` function returns a list of Shifts with the following metadata for each Shift:
- The `shift_id`
- The `facility_id`
- The `agent_id`
- The `custom_id` of the assigned Agent (if available)
- The `start_time` and `end_time` of the Shift
- The `created_at` and `updated_at`

- **Effort estimate**: This task should take around 2-4 hours to complete, including modifying the function and any necessary testing.

- *Ticket 3*: Add custom `id` field to the Shifts table

**Description**: Add a new field to the Shifts table in the database to store the custom `id` assigned by the Facility for each Agent on that Shift.

**Acceptance criteria**:
- A new column named `agent_custom_id` is added to the Shifts table in the database.
- The column can store alphanumeric values with a maximum length of 40 characters.
- The column is `nullable` since not all facilities may want to assign custom ids for every Shift
**Effort estimate**: This task should take around 2-4 hours to complete, including database schema changes and any necessary data migrations.

- *Ticket 4*: Modify `generateReport` function to use custom ids
**Description**: Modify the `generateReport` function to use the custom `id` of each Agent (if available) when generating the report.

**Acceptance criteria**:
- If a custom `id` is available for the Agent assigned to a Shift, the report should use the custom `id` instead of the internal database `id`
- If no custom `id` is available, the report should use the internal database `id` as before

**Effort estimate**: This task should take around 4-6 hours to complete, including modifying the function and any necessary testing.

- *Ticket 5*: Update Facility UI to allow editing of custom ids
**Description**: Add the ability for Facilities to edit the custom ids they've assigned to Agents on their account.

**Acceptance criteria**:
- Facilities can edit the custom `id` for an Agent by navigating to the Agent's profile page and updating the `custom_id` field
- The `custom_id` field should have validation to ensure it is unique within the Facility's account and does not exceed 40 characters in length
- The updated `custom_id` should be reflected in any future reports generated for the Facility

**Effort estimate**: This task should take around 4-6 hours to complete, including modifying the UI and any necessary backend changes to handle the updated custom ids.