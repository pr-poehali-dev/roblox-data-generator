import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RobuxIcon from "@/components/RobuxIcon";
import RobuxSpinner from "@/components/RobuxSpinner";

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGenerate = () => {
    if (username && password) {
      setIsGenerating(true);
      // Имитация процесса генерации
      setTimeout(() => {
        setIsGenerating(false);
        alert("🎉 1000 Robux добавлено на ваш аккаунт!");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-roblox-blue via-blue-600 to-roblox-green flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Заголовок с иконкой */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <RobuxIcon size={60} speed="slow" />
          </div>
          <h1 className="text-3xl font-bold text-roblox-blue mb-2">
            Robux Generator
          </h1>
          <p className="text-gray-600">
            Получите бесплатные Robux для своего аккаунта
          </p>
        </div>

        {/* Форма или спиннер */}
        {isGenerating ? (
          <div className="py-12">
            <RobuxSpinner text="Генерирую Robux..." size="large" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Поле username */}
            <div>
              <Label htmlFor="username" className="text-gray-700 font-medium">
                Имя пользователя Roblox
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Введите ваш username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 border-2 border-gray-200 focus:border-roblox-blue"
              />
            </div>

            {/* Поле password */}
            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Пароль
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 border-2 border-gray-200 focus:border-roblox-blue"
              />
            </div>

            {/* Кнопка генерации */}
            <Button
              onClick={handleGenerate}
              disabled={!username || !password}
              className="w-full bg-gradient-to-r from-roblox-green to-green-600 hover:from-green-600 hover:to-roblox-green text-white font-bold py-3 text-lg rounded-xl shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RobuxIcon size={24} speed="fast" className="mr-2" />
              Генерировать Robux
            </Button>

            {/* Информация */}
            <div className="text-center text-sm text-gray-500 mt-4">
              <p>🔒 Безопасно и быстро</p>
              <p>⚡ Robux будут добавлены мгновенно</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
