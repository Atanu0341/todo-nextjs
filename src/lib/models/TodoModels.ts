import { Schema, model, models, Document, Model } from 'mongoose';

interface ITodo extends Document {
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TodoModel: Model<ITodo> = models.todo || model<ITodo>('todo', TodoSchema);

export default TodoModel;
