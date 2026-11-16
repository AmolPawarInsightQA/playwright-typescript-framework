# CURA Login Test Plan

## Application Overview

Validate the public CURA Healthcare Service login workflow using its demo credentials and form validation behavior. Each scenario starts from a fresh page at the configured base URL. The login form is opened through the Make Appointment link. The demo credentials are John Doe / ThisIsNotAPassword. Authentication succeeds by navigating to the appointment form; failed and empty submissions remain on the login page with a visible login-failed message.

## Test Scenarios

### 1. Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid demo credentials

**File:** `tests/login.spec.ts`

**Steps:**
  1. Open the CURA home page and click Make Appointment.
    - expect: The Login form is displayed at profile.php#login.
    - expect: Username and password fields and the Login button are visible.
  2. Enter username John Doe and password ThisIsNotAPassword, then click Login.
    - expect: The appointment page is displayed.
    - expect: The heading Make Appointment is visible.

#### 1.2. Reject invalid username and password

**File:** `tests/login.spec.ts`

**Steps:**
  1. Open the CURA home page and click Make Appointment.
    - expect: The Login form is displayed.
  2. Enter an invalid username and password, then click Login.
    - expect: The page stays on the Login form.
    - expect: The message Login failed! Please ensure the username and password are valid. is visible.
    - expect: The appointment page is not displayed.

#### 1.3. Reject empty username and password

**File:** `tests/login.spec.ts`

**Steps:**
  1. Open the CURA home page and click Make Appointment.
    - expect: The Login form is displayed and both credential fields are empty.
  2. Leave username and password empty, then click Login.
    - expect: The page stays on the Login form.
    - expect: The message Login failed! Please ensure the username and password are valid. is visible.
    - expect: The appointment page is not displayed.
