import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { UserList } from './components/UserList';
import { UserForm } from './components/UserForm';
import { CycleAdjustmentForm } from './components/CycleAdjustmentForm';
import { Header } from './components/Header';
import { CycleEducation } from './components/CycleEducation';
import { User } from './types';
import { calculateCycleDays } from './utils/cycleCalculations';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [showAdjustment, setShowAdjustment] = useState<string | null>(null);

  const handleAddUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: crypto.randomUUID(),
    };
    setUsers([...users, newUser]);
    setSelectedUserId(newUser.id);
    setShowForm(false);
  };

  const handleAdjustCycle = (userId: string, updates: Partial<User>) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, ...updates } : user
    ));
    setShowAdjustment(null);
  };

  const handleHome = () => {
    setSelectedUserId('');
  };

  const selectedUser = users.find((user) => user.id === selectedUserId);
  const calendarDays = selectedUser
    ? calculateCycleDays(
        selectedUser.lastPeriodStart,
        selectedUser.cycleLength,
        selectedUser.periodLength
      )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        <Header onHome={handleHome} showHomeButton={!!selectedUserId} />

        <UserList
          users={users}
          selectedUserId={selectedUserId}
          onSelectUser={setSelectedUserId}
          onAddUser={() => setShowForm(true)}
          onAdjustCycle={(userId) => setShowAdjustment(userId)}
        />

        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full">
              <UserForm
                onSave={handleAddUser}
                onCancel={() => setShowForm(false)}
              />
            </div>
          </div>
        )}

        {showAdjustment && (
          <CycleAdjustmentForm
            user={users.find(u => u.id === showAdjustment)!}
            onSave={handleAdjustCycle}
            onCancel={() => setShowAdjustment(null)}
          />
        )}

        {selectedUser ? (
          <Calendar days={calendarDays} />
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl">
            女性を選択するか新しく追加してください
          </div>
        )}

        <CycleEducation />
      </div>
    </div>
  );
}