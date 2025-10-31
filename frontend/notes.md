# Notes

## Database:
  I used Mongodb because it is a NoSQL database,for flexible and scalable apllications using mongoose.

## Schema Design:
      title: { type: String, required: true },
      description: String,
      priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
      due_date: { type: Date, required: true },
      status: { type: String, enum: ['Open', 'In Progress', 'Done'], default: 'Open' },
      created_at: { type: Date, default: Date.now }

## Logic:
     Backend:
        --Counting total tasks
        --Calculating completed tasks
        --Analyzing priorities(High,Medium,Low)      
    Frontend:
        --Built using React.js
        --Style with inline style
        --Used useEffect() and fetch() to load data from the backend
        --Components:
           TaskForm:Add new tasks
           TaskList:Display all tasks
           InsightsPanel:Show summary    