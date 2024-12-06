import React, { useState } from 'react';
import { User } from '../types';
import { Moon } from 'lucide-react';

interface UserFormProps {
  onSave: (user: Omit<User, 'id'>) => void;
  onCancel: () => void;
}

export function UserForm({ onSave, onCancel }: UserFormProps) {
  const [name, setName] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);
  const [lastPeriodStart, setLastPeriodStart] = useState(
    new Date().toISOString().split('T')[0]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      cycleLength,
      periodLength,
      lastPeriodStart: new Date(lastPeriodStart),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Moon className="w-6 h-6 text-indigo-500" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">新規トラッカー</h2>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">名前</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          周期の長さ（日数）
        </label>
        <input
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number(e.target.value))}
          min="20"
          max="40"
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          生理期間（日数）
        </label>
        <input
          type="number"
          value={periodLength}
          onChange={(e) => setPeriodLength(Number(e.target.value))}
          min="3"
          max="10"
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          前回の生理開始日
        </label>
        <input
          type="date"
          value={lastPeriodStart}
          onChange={(e) => setLastPeriodStart(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          キャンセル
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all"
        >
          保存
        </button>
      </div>
    </form>
  );
}