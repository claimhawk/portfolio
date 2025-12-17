import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ContactButton } from '@/components/ui/ContactButton';
import { EvalStep } from '@/components/ui/EvalStep';
import { PipelineStep } from '@/components/ui/PipelineStep';

export default function HomePage(): React.ReactElement {

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <div className="mb-8 flex items-center gap-6">
          <a href="https://github.com/claimhawk" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://avatars.githubusercontent.com/u/229266176?v=4"
              alt="Michael O'Neal"
              width={100}
              height={100}
              className="rounded-full transition-opacity hover:opacity-80"
              priority
            />
          </a>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Michael O&apos;Neal
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Machine Learning Specialist &amp; Software Architect
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            27 Years of Building
          </h2>
          <div className="relative border-l-2 border-zinc-300 pl-8 dark:border-zinc-700">
            <TimelineItem year="1998" highlight={false}>
              First job writing production code
            </TimelineItem>
            <TimelineItem year="2000" highlight={false}>
              Got hired at Intel for their new .NET team
            </TimelineItem>
            <TimelineItem year="2001" highlight={false}>
              Began writing articles for Wrox Press
            </TimelineItem>
            <TimelineItem year="2003" highlight={false}>
              Learned LISP to become a better programmer
            </TimelineItem>
            <TimelineItem year="2015" highlight={false}>
              Started working with genetic algorithms
            </TimelineItem>
            <TimelineItem year="2018" highlight={false}>
              Introduced to reinforcement learning to solve problems
            </TimelineItem>
            <TimelineItem year="2019" highlight={false}>
              Introduced to supervised learning and DNNs
            </TimelineItem>
            <TimelineItem year="2020" highlight>
              Went all in on Machine Learning - building models for classification and agentic play
            </TimelineItem>
            <TimelineItem year="2022" highlight>
              Got access to GPT-3 API - started writing coding harnesses
            </TimelineItem>
            <TimelineItem year="2023" highlight>
              Built high accuracy voice models for record labels
            </TimelineItem>
            <TimelineItem year="2025" highlight>
              Built a large ecosystem for replacing computer work with digital labor
            </TimelineItem>
            <TimelineItem year="2026" highlight last>
              Worked with the best of the best in AI design and engineering in the Bay Area
            </TimelineItem>
          </div>
        </div>

        <p className="mb-6 text-xl text-zinc-500 dark:text-zinc-400">
          Here is how I spent the last 6 months:
        </p>
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Digital Labor Platform
        </h2>
        <p className="mb-4 max-w-3xl text-xl text-zinc-600 dark:text-zinc-400">
          An end-to-end machine learning platform that trains vision-language models to automate
          computer use tasks. The system watches how humans use software, generates unlimited
          synthetic training data, and produces specialized AI models that can perform those
          same tasks autonomously.
        </p>
        <div className="rounded-lg border border-zinc-200 bg-zinc-100 p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
          <p className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
            I built everything. Then I replaced myself via automation.
          </p>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            I envisioned and created this entire stack - from idea to production use and hand-off - using
            an agentic &ldquo;guardrail&rdquo; workflow. My agents research, plan, build, refactor, test, and
            bugfix without me ever looking at the code. I look at code structure. I look at artifacts.
            I look at end-to-end testing.
          </p>
          <p className="text-lg font-bold text-zinc-900 dark:text-white">
            I went from being a 10x engineer to a 100x engineer in the last year.
          </p>
        </div>
      </section>

      <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

      {/* The Problem */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          The Problem
        </h2>
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          Businesses spend thousands of hours annually on repetitive computer tasks: data entry,
          form processing, report generation, system navigation. These tasks follow predictable
          patterns but require expensive human labor.
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Vision-language models can automate these tasks by looking at screenshots and predicting
          the next action - but training them requires massive amounts of labeled data showing
          exactly which pixel to click for each screen state. Collecting this data manually is
          prohibitively expensive.
        </p>
      </section>

      {/* The Solution */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          The Solution: Synthetic Data Generation
        </h2>
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          Instead of manually labeling screenshots, I built a system that <strong className="text-zinc-900 dark:text-zinc-100">generates synthetic training data programmatically</strong>.
          The system can produce unlimited perfectly-labeled training examples - screenshots
          paired with the exact coordinates the model should click.
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          This approach is 1000x cheaper than manual annotation and produces higher quality data
          because the labels are mathematically precise, not human approximations.
        </p>
      </section>

      <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

      {/* Pipeline Section */}
      <section id="pipeline" className="mb-20 scroll-mt-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          The Complete Pipeline
        </h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          From customer workflow recording to production AI model:
        </p>

        {/* Grounding & Coordinates */}
        <div className="mb-12 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Grounding: Teaching Models Where to Click
          </h3>
          <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
            The core challenge in computer use AI is <strong className="text-zinc-900 dark:text-zinc-100">grounding</strong> - connecting
            the model&apos;s understanding of what it sees to precise spatial locations. When the model
            sees a &quot;Submit&quot; button, it needs to output the exact coordinates to click.
          </p>
          <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">
            We use <strong className="text-zinc-900 dark:text-zinc-100">Resolution Units (RU)</strong>: coordinates normalized to a 0-1000 range.
            This makes the model resolution-independent - it learns spatial relationships that
            transfer across different screen sizes.
          </p>
          <div className="rounded-lg border border-zinc-200 bg-zinc-900 p-6 dark:border-zinc-700">
            <p className="mb-2 text-sm text-zinc-400">Coordinate conversion formula:</p>
            <code className="text-sm text-green-400">
              coordinate_ru = (pixel_position / image_dimension) * 1000
            </code>
            <p className="mt-4 mb-2 text-sm text-zinc-400">Model output format:</p>
            <pre className="text-sm text-green-400">{`<tool_call>
{
  "name": "computer_use",
  "arguments": {
    "action": "left_click",
    "coordinate": [523, 847]
  }
}
</tool_call>`}</pre>
          </div>
        </div>

        {/* Step 1: Customer Recording */}
        <PipelineStep
          number={1}
          title="Customer Workflow Recording"
          description="The customer records their screen while performing the workflow we want to automate. They narrate what they're doing and explain how they make decisions. This captures not just the clicks, but the reasoning behind them."
          technical="Screen recordings preserve native resolution. The narration provides context for edge cases and decision logic that wouldn't be obvious from clicks alone."
          screenshots={[
            {
              src: '/images/customer-workflow-narration-video.png',
              caption: 'Customer screen recording with voice narration explaining the workflow and decision-making process.',
            },
          ]}
        />

        {/* Step 2: Import & Expert Grounding */}
        <PipelineStep
          number={2}
          title="Import Screenshot & Define Expert Grounding"
          description="Import a screenshot from the customer workflow and define the expert grounding regions. Each region becomes a separate expert&apos;s viewport - the calendar, appointment grid, booking panel. Experts only see their region, not the whole screen."
          technical="Top-level grounding dramatically reduces tensors processed by the image tower. Each expert receives a cropped image of just its region, improving accuracy and inference speed."
          screenshots={[
            {
              src: '/images/annotator-appt-screen-expert-grounding.png',
              caption: 'Define expert grounding regions on the full screen. Each colored region becomes a separate expert viewport.',
            },
          ]}
        />

        {/* Step 3: Annotate Regions */}
        <PipelineStep
          number={3}
          title="Annotate Region UI & Generate Tasks"
          description="For each expert region, annotate the UI elements - buttons, text fields, grids, dropdowns. Select element options (clickable, scrollable, has text) and tasks are generated automatically. Computer use has a discrete action space."
          technical="Each region is defined with pixel-perfect boundaries and classified by type. The annotator outputs structured JSON mapping elements to coordinates and auto-generates the task set."
          screenshots={[
            {
              src: '/images/annotator-calendar-expert.png',
              caption: 'Calendar expert region: annotate date buttons, navigation controls, and selection elements.',
            },
            {
              src: '/images/annotator-appointment-grid-expert.png',
              caption: 'Appointment grid expert: define the grid structure with rows, columns, and cell interactions.',
            },
            {
              src: '/images/annotator-calendar-tasks.png',
              caption: 'Tasks are auto-generated from element options. Each task maps to a discrete action in the action space. All ground truth coordinates automatically extracted.',
            },
          ]}
        />

        {/* Step 4: Data Sanitization & Sample Generation */}
        <PipelineStep
          number={4}
          title="Data Sanitization & Sample Generation"
          description="The Annotator removes real customer data (patient names, SSNs, dates) and synthetically regenerates it. This produces training samples: a screenshot image, a prompt describing the task, the expected tool_call response, and ground truth coordinates."
          technical="Each training sample is a tuple: (image, prompt, tool_call_response, ground_truth). Synthetic data uses realistic fake values from Faker libraries while preserving the exact UI layout and element positions."
          screenshots={[
            {
              src: '/images/chart-original.jpg',
              caption: 'Before: Original screenshot with real customer data (patient names, dates, procedures, amounts).',
            },
            {
              src: '/images/chart-masked.jpg',
              caption: 'After: All customer data masked out, preserving UI structure. Ready for synthetic data compositing.',
            },
          ]}
        />

        {/* Step 5: Meta-Generator (CUDAG) */}
        <PipelineStep
          number={5}
          title="Meta-Generator Creation (CUDAG)"
          description="The annotated data feeds into CUDAG, a meta-generator framework that creates screen-specific generators. Instead of manually coding each generator, CUDAG bootstraps them from the annotation data - one generator per screen type."
          technical="CUDAG (Computer Use Data Generation) uses an MVC pattern: Screen defines UI layout, State provides randomized data, Renderer produces images, Task defines action logic. Generators output unlimited training samples in Qwen3-VL format."
          screenshots={[
            {
              src: '/images/cudag-dataset-folder.png',
              caption: 'Generated dataset structure: images/, train.jsonl, val.jsonl, test/ with held-out evaluation data.',
            },
            {
              src: '/images/cudag-test-folder.png',
              caption: 'Test set contains unseen data with annotated examples for each task type.',
            },
            {
              src: '/images/cudag-synthetic-00000.jpg',
              caption: 'CUDAG generator output: masked image filled with synthetic data. Each run produces unique realistic content.',
            },
            {
              src: '/images/cudag-synthetic-00008.jpg',
              caption: 'Different scroll position generated from scroll options defined in annotator. Unlimited variations.',
            },
          ]}
        />

        {/* Step 6: Dataset Generation */}
        <PipelineStep
          number={6}
          title="Region-Focused Dataset Generation"
          description="The generators create datasets that teach LoRA experts to use specific UI regions - not the whole screen. Each expert learns one screen type deeply: where to click for each action, what text to enter, how to navigate that specific interface. Generators also produce test sets of unseen data with annotated examples of each task type."
          technical="Datasets use Resolution Units (RU) normalized to 0-1000 for resolution independence. Training focuses on region-level actions rather than full-screen understanding, which improves accuracy and reduces training complexity."
          screenshots={[
            {
              src: '/images/cudag-test-annotated.png',
              caption: 'Annotated test example showing task prompt, ground truth coordinates, and expected tool_call response.',
            },
            {
              src: '/images/cudag-test-grounding.png',
              caption: 'Grounding task (optional): model learns to locate UI regions by outputting bounding box coordinates.',
            },
          ]}
        />

        {/* Step 7: LoRA Expert Training */}
        <PipelineStep
          number={7}
          title="LoRA Expert Training"
          description="Each dataset trains a specialized LoRA expert adapter. Training runs until validation loss drops below 0.05. At that point, automatic testing begins - evaluating each new checkpoint against held-out data to measure real-world accuracy."
          technical="Training runs on Modal cloud with 4x H100-80GB GPUs using flash-attention-2. LoRA trains only 1.1% of model parameters (~100MB per adapter). Autotest uses out-of-sample data not seen during training or validation."
          screenshots={[
            {
              src: '/images/modal-dashboard.png',
              caption: 'All dataset generation, tensor processing, and training runs on Modal.com for huge savings over AWS.',
            },
            {
              src: '/images/lora-training.png',
              caption: 'Early stopping, auto checkpointing after 0.05 val loss, auto testing of checkpoints for accuracy on unseen data to prove generalization.',
            },
          ]}
        />

        {/* Step 8: Autotest & Validation */}
        <PipelineStep
          number={8}
          title="Autotest on Unseen Data"
          description="When validation loss hits the threshold, autotest kicks in for every new checkpoint. This tests the model on completely unseen data - not in the training set, not in validation - measuring true out-of-sample accuracy before deployment."
          technical="Autotest runs inference on held-out examples and compares predicted coordinates against ground truth. We track accuracy by action type (click, type, scroll) and screen region to identify weak spots."
          screenshots={[
            {
              src: '/images/moe-accuracy-dashboard.png',
              caption: 'MoE dashboard showing expert accuracies at a glance. 7 active experts, 97.57% average accuracy, 55,734 training samples.',
            },
          ]}
        />

        {/* Step 9: Real-Time Episode Evaluation */}
        <PipelineStep
          number={9}
          title="Real-Time Episode Evaluation"
          description="The Episode Builder creates multi-step workflows for end-to-end evaluation. Each episode chains screens together - login, navigate, perform task - and the Oracle Agent runs through them in real-time, measuring accuracy across the entire workflow."
          technical="Episodes define screen sequences with expected actions. The Oracle Agent streams inference results showing predict→action pairs. Real-time visualization shows the cursor position and action type for immediate feedback."
          screenshots={[
            {
              src: '/images/episode-builder.png',
              caption: 'Episode Builder: Define multi-step workflows by selecting screens and configuring task parameters. 11 steps across Desktop, Login, Appointments, and Chart screens.',
            },
          ]}
        />

        {/* Eval Running Showcase */}
        <div className="mb-12 ml-14">
          <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Live Evaluation: Login Workflow
          </h4>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Watch the Oracle Agent execute a login workflow. Each step shows the model&apos;s prediction followed by the executed action. The AGENT ACTION panel displays real-time status.
          </p>
          <div className="space-y-4">
            <EvalStep
              predictSrc="/images/login-user-predict.png"
              actionSrc="/images/login-user-action.png"
              stepLabel="Step 1: Select User"
              predictLabel="PREDICTING: Click on Dr. Smith in the user list"
              actionLabel="LEFT CLICK: User selected"
            />
            <EvalStep
              predictSrc="/images/login-password-predict.png"
              actionSrc="/images/login-password-action.png"
              stepLabel="Step 2: Enter Password"
              predictLabel="PREDICTING: Enter password in the password field"
              actionLabel="LEFT CLICK: Password field focused"
            />
            <EvalStep
              predictSrc="/images/login-ok-predict.png"
              actionSrc="/images/login-user-action.png"
              stepLabel="Step 3: Submit Login"
              predictLabel="PREDICTING: Click the OK button to log in"
              actionLabel="LEFT CLICK: Login submitted"
            />
          </div>
        </div>

        {/* Step 10: Wiki Agent */}
        <PipelineStep
          number={10}
          title="Automated Documentation (Wiki Agent)"
          description="The Wiki Agent crawls the entire codebase - all submodules - and generates up-to-date documentation automatically. No manual docs. The wiki reflects the actual code, always current, always accurate. The private customer-centric codebase is documented as well, but those pages are restricted to org members."
          technical="The agent parses Python modules, extracts docstrings, analyzes code structure, and generates markdown documentation. Runs on every commit to keep docs synchronized with code changes."
        />
        <div className="mb-12 ml-14">
          <a
            href="https://claimhawk.github.io/cudag-wiki/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            View Live Wiki
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>

      <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

      {/* Agent Harness */}
      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          The Agent Harness
        </h2>
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          Remembering back to learning the Sutton method to teach simple models to play games like Pacman or Donkey Kong,
          I realized that a low-skill computer job could be trained in a similar manner:
        </p>
        <ol className="mb-6 list-inside list-decimal space-y-2 text-lg text-zinc-600 dark:text-zinc-400">
          <li>Take a screenshot and preprocess</li>
          <li>Feed into the model with possible augmentation (zero-shot vs bootstrap)</li>
          <li><strong className="text-zinc-900 dark:text-zinc-100">RL path:</strong> Use rewards and Q-tables</li>
          <li><strong className="text-zinc-900 dark:text-zinc-100">SL path:</strong> Generate data using an MCTS bot</li>
        </ol>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          The agent harness is built around <strong className="text-zinc-900 dark:text-zinc-100">tool use</strong>,
          a <strong className="text-zinc-900 dark:text-zinc-100">state machine</strong>, and an
          <strong className="text-zinc-900 dark:text-zinc-100"> orchestration expert</strong> that decomposes
          general tasks into expert-level actions.
        </p>

        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">High-Level Task</h3>
            <div className="rounded-lg bg-zinc-100 p-4 font-mono text-sm dark:bg-zinc-800">
              Log in with Dr G and &quot;Password&quot; for the password
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">Expert-Level Actions</h3>
            <div className="rounded-lg bg-zinc-100 p-4 font-mono text-sm dark:bg-zinc-800">
              <div className="text-green-600 dark:text-green-400">1. Click Dr G in the user list</div>
              <div className="text-green-600 dark:text-green-400">2. Click the password field</div>
              <div className="text-green-600 dark:text-green-400">3. Type &quot;Password&quot;</div>
              <div className="text-green-600 dark:text-green-400">4. Click the OK button</div>
            </div>
          </div>
        </div>

        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          The orchestrator understands the current screen state and generates the exact sequence of atomic actions
          that each LoRA expert was trained on. This bridges natural language instructions to pixel-perfect execution.
        </p>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          The agent runs on a <strong className="text-zinc-900 dark:text-zinc-100">VM-based desktop</strong> and
          operates the computer like a human would - moving the cursor, clicking buttons, typing text. No APIs,
          no integrations, no special access. Just vision and mouse/keyboard control.
        </p>

        <div className="rounded-lg border border-zinc-200 bg-zinc-100 p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
          <h3 className="mb-3 font-semibold text-zinc-900 dark:text-white">Future: RL Flywheel</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Currently working on an <strong className="text-zinc-900 dark:text-white">RL Flywheel system</strong> using
            gamification to &quot;collapse&quot; the multiple LoRA experts into a single student model. Using DPO and other
            methods to push accuracies up to 99% for customer workflows.
          </p>
        </div>
      </section>

      <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

      {/* Mixture of Experts */}
      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Mixture of LoRA Experts
        </h2>
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          Instead of one massive model that tries to handle everything, I use a <strong className="text-zinc-900 dark:text-zinc-100">Mixture of LoRA Experts</strong> system.
          A lightweight router model looks at each screenshot and classifies which screen type
          it is. Then it loads only the specialized expert adapter for that screen.
        </p>
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          The base model is <strong className="text-zinc-900 dark:text-zinc-100">Qwen3-VL-8B</strong> for computer use tasks.
          For OCR tasks, the router sends requests to <strong className="text-zinc-900 dark:text-zinc-100">Chandra 7B</strong>, a specialized OCR model.
        </p>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          This gives us the best of both worlds: specialized performance on each screen type
          (because each expert only learns one thing well) with efficient inference (because we
          only load one small adapter at a time, not multiple full models).
        </p>

        <figure className="mb-6 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Image
            src="/images/moe-diagram.png"
            alt="ClaimHawk MoE Architecture: Customer input flows through preprocessing (screenshots + text instructions) to data generation (screen generator + workflow generator), then to SL Stack (Supervised Learning with LoRA Adapter and MoE Server) and RL Stack (Reinforcement Learning with RL Agent and OpenReal Environment)"
            width={1200}
            height={600}
            className="h-auto w-full"
          />
          <figcaption className="bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
            ClaimHawk Architecture: Customer recordings flow through preprocessing and data generation to train both the SL Stack (supervised LoRA experts) and RL Stack (reinforcement learning agents).
          </figcaption>
        </figure>


        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">Router (MOLE)</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              LoRA-based classifier that identifies screen type from screenshots. Trained on balanced
              dataset of all screen types. Outputs routing decision in &lt;1ms.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">Expert Adapters</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Specialized LoRA adapters for each screen type: calendar, claim-window, patient-list,
              login, desktop, etc. Each ~100MB, hot-swappable at runtime.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">Merged Models</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              For production, adapters can be merged into base model for 10-20% faster inference.
              Trade-off: loses ability to hot-swap but gains speed.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

      {/* About Me */}
      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          About Me
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Background
            </h3>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Systems engineer since 1998. Self-taught - I skipped high school for the
              information revolution. Audited hundreds of university courses across computer science,
              mathematics, and engineering. Worked in 14 countries over the years.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Formative languages: C, C++, C#, LISP, Ruby, Python. My career has spanned high-performance
              computing, algorithmic trading, web architecture, and now machine learning infrastructure.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Technical Expertise
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Machine Learning</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  VLM fine-tuning, LoRA adapters, distributed training, synthetic data generation,
                  reinforcement learning, evaluation systems
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">MLOps &amp; Infrastructure</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Modal cloud, GPU orchestration, model serving, pipeline automation, data versioning
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Systems Engineering</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  High-performance algorithms, distributed systems, API design, full-stack development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

      {/* What I'm Looking For */}
      <section className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          What I&apos;m Looking For
        </h2>
        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          I&apos;m not playing the resume game. If you&apos;re here, you want to see what I can build - not
          a document your AI will filter out. I can build anything you want to see, right before your eyes.
        </p>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          I&apos;m looking to relocate to San Francisco to work with the best and brightest in AI design and engineering.
        </p>
        <ContactButton />
      </section>
    </div>
  );
}


interface TimelineItemProps {
  readonly year: string;
  readonly children: React.ReactNode;
  readonly highlight?: boolean | undefined;
  readonly last?: boolean | undefined;
}

function TimelineItem({ year, children, highlight, last }: TimelineItemProps): React.ReactElement {
  return (
    <div className={`relative ${last === true ? '' : 'pb-8'}`}>
      <div className={`absolute -left-10 flex h-4 w-4 items-center justify-center rounded-full ${highlight === true ? 'bg-amber-500' : 'bg-zinc-400 dark:bg-zinc-600'}`}>
        <div className={`h-2 w-2 rounded-full ${highlight === true ? 'bg-amber-300' : 'bg-zinc-200 dark:bg-zinc-400'}`} />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
        <span className={`text-sm font-bold ${highlight === true ? 'text-amber-600 dark:text-amber-400' : 'text-zinc-500 dark:text-zinc-500'}`}>
          {year}
        </span>
        <p className={`${highlight === true ? 'font-medium text-zinc-900 dark:text-zinc-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
          {children}
        </p>
      </div>
    </div>
  );
}

