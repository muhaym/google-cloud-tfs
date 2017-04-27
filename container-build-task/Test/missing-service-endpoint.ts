// Copyright 2017 Google Inc. All Rights Reserved
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview This is a test script for the container-build task for a
 *   missing service endpoint.
 * @author przybjw@google.com (Jim Przybylinski)
 */
import * as path from 'path';
import { TaskLibAnswers } from 'vsts-task-lib/mock-answer';
import { TaskMockRunner } from 'vsts-task-lib/mock-run';
import {
  registerCommonMocks, getDefaultAnswers, getFsMock
} from 'common/register-mocks';

const taskPath = path.join(__dirname, '..', 'container-build.js');
const runner = new TaskMockRunner(taskPath);

const deployPath = path.resolve('deploy');

runner.setInput('deploymentPath', deployPath);
runner.setInput('buildConfigType', 'default');
runner.setInput('registry', 'gcr.io');
runner.setInput('imageName', 'image');

const answers: TaskLibAnswers = getDefaultAnswers();

runner.setAnswers(answers);
registerCommonMocks(runner);

runner.run();
