<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerificationMail extends Notification
{
  use Queueable;

  private $user;

  /**
   * Create a new notification instance.
   *
   * @return void
   */
  public function __construct(User $user)
  {
    $user->refresh();
    $this->user = $user;
  }

  /**
   * Get the notification's delivery channels.
   *
   * @param mixed $notifiable
   * @return array
   */
  public function via($notifiable)
  {
    return ['mail'];
  }

  /**
   * Get the mail representation of the notification.
   *
   * @param mixed $notifiable
   * @return \Illuminate\Notifications\Messages\MailMessage
   */
  public function toMail($notifiable)
  {
    $this->locale("de");
    return (new MailMessage)
      ->subject('Bitte verifizieren Sie Ihre E-Mail Adresse.')
      ->line('Hallo ' . $this->user->name)
      ->line('Danke, dass Sie einen Account erstellt haben. Bitte vergessen Sie nicht, Ihre Registrierung abzuschließen!')
      ->action('Bestätigen Sie Ihre E-Mail Adresse ', url('user/verify', $this->user->verify_token))
      ->line('Danke, dass Sie unsere Applikation nutzen!');
  }

  /**
   * Get the array representation of the notification.
   *
   * @param mixed $notifiable
   * @return array
   */
  public function toArray($notifiable)
  {
    return [
      //
    ];
  }
}
