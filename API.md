GET /quiz&id=123

```
{
  quiz: {
    _id: string
    title: string
    description: string
    created_at: string
    updated_at: string
    owner: {
      username: string
      id: string,
      url: string
    }
    is_open: boolean
    questions: [
      {
        _id: string,
        type: "multiple",
        question_text: string,
        answer_url: string
        possible_answers: [
          {
            _id: string,
            question_id: string
            answer_text: string
          }
        ]
      }
    ]
  }
}
```

POST /quiz
