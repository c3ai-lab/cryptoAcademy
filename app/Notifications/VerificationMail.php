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
      ->subject('Bitte verifiziere deine E-Mail Adresse.')
      ->line('Hallo ' . $this->user->name)
      ->line('Danke, dass Du einen Account erstellt hast. Bitte vergiss nicht, deine Registrierung abzuschließen!')
      ->action('Bestätige deine E-Mail Adresse ', url('user/verify', $this->user->verify_token))
      ->line('Danke, dass Du unsere Applikation nutzt!');
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
