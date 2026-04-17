import { Slide } from "@/components/ui/slide";
import { ArrowRight, Zap, DollarSign } from "lucide-react";

export default function PitchDeck() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      <nav className="fixed top-4 right-4 z-50 flex gap-4">
        <a href="#pitch" className="px-4 py-2 text-sm bg-green-100 rounded-lg hover:bg-green-200">
          Pitch
        </a>
        <a href="#demo" className="px-4 py-2 text-sm bg-amber-100 rounded-lg hover:bg-amber-200">
          Demo
        </a>
      </nav>

      <div className="max-w-7xl mx-auto py-16 px-6">
        
        {/* СЛАЙД 1: Титульный */}
        <Slide image="slide1.jpg">
          <h1 className="text-7xl md:text-8xl font-black gradient-text mb-8 leading-tight">
            AGENTIC <br />
            FITNESS
          </h1>
          <p className="text-3xl text-slate-700 mb-12 max-w-2xl">
            AI-управляемые персональные тренировки 10x быстрее
          </p>
          <div className="flex items-center gap-4 text-xl text-slate-600">
            <span>jura4mal | 2026 | Грант заявка</span>
            <Zap className="w-8 h-8 text-amber-500 animate-pulse" />
          </div>
        </Slide>

        {/* СЛАЙД 2: Проблема */}
        <Slide image="slide2.jpg" id="problem">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-black text-slate-900 mb-8">
                90% атлетов <br />
                не достигают целей
              </h2>
              <ul className="text-2xl space-y-4 text-slate-700">
                <li>• 3+ часа = 0 прогресс</li>
                <li>• 76% тратят время впустую</li>
                <li>• $47B рынок шаблонов</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-7xl font-black gradient-text mb-4">
                47 секунд
              </div>
              <p className="text-2xl text-green-700 font-bold">
                Agentic решение
              </p>
            </div>
          </div>
        </Slide>

        {/* СЛАЙД 3: Решение */}
        <Slide image="slide3.jpg">
          <h2 className="text-6xl font-black gradient-text mb-12">
            AI-оркестр для вашего тела
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-2xl">
            <div className="p-8 bg-green-50/50 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-700 mb-4">FitCursor</h3>
              <p>Генерация программ</p>
            </div>
            <div className="p-8 bg-amber-50/50 rounded-2xl">
              <h3 className="text-3xl font-bold text-amber-700 mb-4">BodyClaude</h3>
              <p>Биометрия в реальном времени</p>
            </div>
            <div className="p-8 bg-slate-50/50 rounded-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">3 AI-агента</h3>
              <p>FitOpus + HealthGPT</p>
            </div>
          </div>
        </Slide>

        {/* СЛАЙД 4: Стек */}
        <Slide image="slide4.jpg" id="stack">
          <h2 className="text-6xl font-black gradient-text mb-12">
            Production Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-xl">
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-6">Frontend</h3>
              <ul className="space-y-3 text-2xl">
                <li>• React 19 + TanStack Router</li>
                <li>• Tailwind + shadcn/ui</li>
                <li>• Three.js 3D биометрия</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-amber-600 mb-6">Backend</h3>
              <ul className="space-y-3 text-2xl">
                <li>• Yandex Cloud Serverless</li>
                <li>• YandexGPT 4o API</li>
                <li>• Object Storage 4K видео</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* СЛАЙД 5: Метрики */}
        <Slide image="slide5.jpg">
          <h2 className="text-6xl font-black text-slate-900 mb-12">
            Доказанная эффективность
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black gradient-text">+26%</div>
              <p className="text-xl text-slate-600 mt-2">Эффективность</p>
            </div>
            <div>
              <div className="text-5xl font-black gradient-text">2x</div>
              <p className="text-xl text-slate-600 mt-2">Быстрее прогресс</p>
            </div>
            <div>
              <div className="text-5xl font-black gradient-text">57%</div>
              <p className="text-xl text-slate-600 mt-2">Цели быстрее</p>
            </div>
          </div>
        </Slide>

        {/* СЛАЙД 6: Бизнес */}
        <Slide image="slide6.jpg">
          <h2 className="text-6xl font-black gradient-text mb-12">
            $2.7M ARR к 2027
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-2xl">
            <ul className="space-y-4">
              <li>💎 Freemium (бесплатно)</li>
              <li>💎 Premium $199 lifetime</li>
              <li>💎 Enterprise $999/мес</li>
            </ul>
            <div className="text-4xl font-black gradient-text text-center">
              CAC $29 | LTV $497<br/>
              <span className="text-2xl">17x ROI</span>
            </div>
          </div>
        </Slide>

        {/* СЛАЙД 7: Roadmap */}
        <Slide image="slide7.jpg">
          <h2 className="text-6xl font-black text-slate-900 mb-12">
            $500K Грант → Roadmap
          </h2>
          <div className="space-y-6 text-2xl">
            <div>Q2'26: MVP + 50K users [$150K]</div>
            <div>Q3'26: Biometrics + App Store [$120K]</div>
            <div>Q4'26: Global launch [$150K]</div>
            <div className="text-4xl font-black gradient-text pt-8">
              Q1'27: $2.7M ARR
            </div>
          </div>
        </Slide>

        {/* СЛАЙД 8: Команда */}
        <Slide image="slide8.jpg">
          <h2 className="text-6xl font-black gradient-text mb-12">
            Команда
          </h2>
          <div className="text-3xl space-y-6">
            <div className="font-bold text-slate-900">
              jura4mal — Full-Stack Architect
            </div>
            <ul className="text-2xl ml-8 space-y-2">
              <li>12+ лет React/VK Mini Apps</li>
              <li>Yandex Cloud Certified</li>
              <li>Fitness AI прототипы</li>
            </ul>
            <div className="pt-8 text-xl opacity-80">
              Советники: FitDevCody (260K YT)
            </div>
          </div>
        </Slide>

        {/* СЛАЙД 9: Конкуренты */}
        <Slide image="slide9.jpg">
          <h2 className="text-5xl font-black gradient-text mb-12">
            Почему мы выигрываем
          </h2>
          <div className="overflow-x-auto">
            <table className="text-xl border-collapse w-full bg-green-50">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Agentic</th>
                  <th className="p-4">MyFitnessPal</th>
                  <th className="p-4">Peloton</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-4">AI Agents</td><td className="p-4 font-bold">✅ 3x</td><td className="p-4">❌</td><td className="p-4">❌</td></tr>
                <tr><td className="p-4">Biometrics</td><td className="p-4 font-bold">✅ RT</td><td className="p-4">❌</td><td className="p-4">❌</td></tr>
                <tr><td className="p-4">Speed</td><td className="p-4 font-bold">✅ 47s</td><td className="p-4">❌</td><td className="p-4">❌</td></tr>
              </tbody>
            </table>
          </div>
        </Slide>

        {/* СЛАЙД 10: CTA */}
        <Slide image="slide10.jpg" id="cta">
          <div className="text-center w-full">
            <h2 className="text-7xl font-black gradient-text mb-12">
              Инвестируйте в будущее
            </h2>
            <div className="text-5xl font-black text-slate-900 mb-12">
              $500K → 1B трансформаций
            </div>
            <div className="space-y-6 text-2xl text-slate-700 mb-16">
              <div>🚀 MVP готов</div>
              <div>🚀 10K в beta</div>
              <div>🚀 $2.7M ARR (12 мес)</div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="mailto:jura4mal@gmail.com" 
                className="px-8 py-4 bg-green-600 text-white text-2xl rounded-xl hover:bg-green-700 flex items-center justify-center gap-2"
              >
                Связаться с нами <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </Slide>

      </div>
    </main>
  );
}