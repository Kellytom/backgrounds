---
---


test-theia.mdx
need to install extensions like live Server
https://open-vsx.org/




"Visual Studio Code is unable to watch for file changes in this large workspace" (error ENOSPC)
When you see this notification, it indicates that the VS Code file watcher is running out of file handles that are needed to implement file watching. Most often this can happen when opening a workspace that is large and contains many files. Before adjusting platform limits, make sure that potentially large folders, such as Python .venv, are added to the files.watcherExclude setting (more details below). It is also possible that other running applications consume so many file handles that none are left for VS Code to use. In that case, it might help to close these other applications.

The current limit can be viewed by running:

Using the AI Features in the Theia IDE as an End User
This section documents how to use AI features in the Theia IDE (available since version 1.54, see also this introduction). These features are based on Theia AI, a framework for building AI assistants in tools and IDEs. Theia AI is part of the Theia platform. If you're interested in building your own custom tool or IDE with Theia AI, please refer to the corresponding documentation.

Please note that these features are in alpha state. This means they may be unstable, behave unexpectedly, or undergo significant changes. In particular, using your own LLM might incur costs that you need to monitor closely. We have not yet optimized the AI assistants in the Theia IDE for token usage. Use these features at your own risk, and we welcome any feedback, suggestions, and contributions!

Theia AI features within the Theia IDE are currently disabled by default. See the next section on how to enable them.

Learn more about the AI-powered Theia IDE:

👉 Introducing the AI-powered Theia IDE: AI-driven coding with full Control

👉 Watch the video: AI-Native Tools with Full Control: Theia AI & The AI-Powered Theia IDE In Action

👉 Download the AI-powered Theia IDE

Table of Contents
Set-Up
LLM Providers Overview
OpenAI (Hosted by OpenAI)
OpenAI Compatible Models (e.g. via VLLM)
Azure
Mistral
Vercel AI
Anthropic
Google AI
Hugging Face
LlamaFile Models
Ollama
Custom Request Settings
Thinking Mode
Current Agents in the Theia IDE
Theia Coder (Chat Agent)
Universal (Chat Agent)
Orchestrator (Chat Agent)
Command (Chat Agent)
Architect (Chat Agent)
Code Completion (Agent)
Terminal Assistance (Agent)
Chat
Agent Pinning
Context Variables
Editing Chat Requests
AI Configuration
View and Modify Prompts
Prompt Template and Fragment Locations
Prompt Fragments
Custom Agents
MCP Integration
Configuring MCP Servers
Starting and Stopping MCP Servers
Using MCP Server Functions
MCP Configuration View
Tool Call Confirmation UI
SCANOSS
Configure SCANOSS in the Theia IDE
Manual Scanning
Automatic Scanning
Understanding SCANOSS Results
AI History
Learn more
Set-Up
To activate AI support in the Theia IDE, go to Preferences and enable the setting “AI-features => AI Enable.”

To use Theia AI within the Theia IDE, you need to provide access to at least one LLM. Theia IDE comes with preinstalled support for several LLM providers (including OpenAI API-compatible models and Anthropic). Additionally, Theia IDE supports connecting to models via Ollama. See the the LLM Provider Overview and the corresponding sections below on how to configure these providers.

If you do not have access to an LLM, yet, here is an easy way to try it out:

👉 Testing the AI-Powered Theia IDE and Theia AI Applications for Free Using GitHub Models

Other LLM providers, including local models, can be added easily. If you would like to see support for a specific LLM, please provide feedback or consider contributing.

Each LLM provider offers a configurable list of available models (see the screenshot below for Hugging Face Models models).

To use a specific model in your IDE, configure it on a per-agent basis in the AI Configuration view.

See also:

👉 Why Theia supports any LLM!

LLM Providers Overview
Note: Theia IDE enables connections to various models (e.g., HuggingFace, custom OpenAPI models, LlamaFile). However, not all models may work out of the box, as they may require specific customizations or optimizations. If you encounter issues, please provide feedback, keeping in mind this is an early-phase feature.

Many models and providers support using an OpenAI compatible API. In this case, we recommend using the Theia AI provider for OpenAI Compatible Models

Below is an overview of various Large Language Model (LLM) providers supported within the Theia IDE, highlighting their key features and current state.

Provider	Streaming	Tool Calls	Structured Output	State
OpenAI Official	✅	✅	✅	Public
OpenAI Compatible	✅	✅	✅	Public
Azure	✅	✅	✅	Public
Mistral (via OpenAI Compatible)	✅	✅	✅	Public
Vercel AI	✅	✅	✅	Experimental
Anthropic	✅	✅	❌	Beta
Google AI	✅	✅	❌	Experimental
Hugging Face	✅	❌	❌	Experimental
LlamaFile	✅	❌	❌	Experimental
Ollama	✅	✅	✅	Alpha


OpenAI (Hosted by OpenAI)
To enable the use of OpenAI, you need to create an API key in your OpenAI API account (https://platform.openai.com/) and enter it in the settings AI-features => OpenAiOfficial (see the screenshot below). Please note: By using this preference the Open AI API key will be stored in clear text on the machine running Theia. Use the environment variable OPENAI_API_KEY to set the key securely. Please also note that creating an API key requires a paid subscription, and using these models may incur additional costs. Be sure to monitor your usage carefully to avoid unexpected charges. We have not yet optimized the AI assistants in the Theia IDE for token usage.

Open AI configuration in the Theia IDE
The OpenAI provider is preconfigured with a list of available models. You can easily add new models to this list, for example, if new options are released.

OpenAI Compatible Models (e.g. via VLLM)
As an alternative to using an official OpenAI account, Theia IDE also supports arbitrary models compatible with the OpenAI API (e.g., hosted via VLLM). This enables you to connect to self-hosted models with ease. To add a custom model, click on the link in the settings section and add your configuration like the following and check the Readme for all configuration options:

{
   "ai-features.openAiCustom.customOpenAiModels": [
       {
           "model": "your-model-name",
           "url": "your-URL",
           "id": "your-unique-id", // Optional: if not provided, the model name will be used as the ID
           "apiKey": "your-api-key", // Optional: use 'true' to apply the global OpenAI API key
           "developerMessageSettings": "system" //Optional: Controls the handling of system messages: user, system, and developer will be used as a role, mergeWithFollowingUserMessage will prefix the following user message with the system message or convert the system message to user message if the next message is not a user message. skip will just remove the system message. Defaulting to developer.

       }
   ]
}
Azure
All models hosted on Azure that are compatible with the OpenAI API are accessible via the Provider for OpenAI Compatible Models provider. Note that some models hosted on Azure may require different settings for the system message, which are detailed in the OpenAI Compatible Models section and the Readme.

Mistral Models
Mistral models (including on "La Platforme") can be used via the OpenAI API and support the same feature set. Here is an example configuration:

"ai-features.openAiCustom.customOpenAiModels": [
    {
        "model": "mistral-large-latest",
        "url": "https://api.mistral.ai/v1",
        "id": "Mistral",
        "apiKey": "YourAPIKey",
        "developerMessageSettings": "system"
    },
    {
        "model": "codestral-latest",
        "url": "https://codestral.mistral.ai/v1",
        "id": "Codestral",
        "apiKey": "YourAPIKey",
        "developerMessageSettings": "system"
    }
]
Vercel AI
Note: The Vercel AI provider is currently experimental. We are evaluating replacing some existing providers to reduce maintenance effort. Please try this provider and provide feedback to help us stabilize it.

The Vercel AI provider offers a unified way of communicating with LLMs through the Vercel AI SDK framework. It serves as an alternative to other providers and currently supports OpenAI and Anthropic APIs with both official and custom endpoints.

API Key Configuration
If you already have your OpenAI or Anthropic API keys set as environment variables (OPENAI_API_KEY or ANTHROPIC_API_KEY), no additional configuration is required for the Vercel provider.

If you configure your API keys through the settings, you need to explicitly set the API keys for the Vercel provider:

Go to Preferences => AI features => Vercel AI
Set your OpenAI and/or Anthropic API keys